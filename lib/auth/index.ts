import { authOptions } from "./options";
import { getServerSession } from "next-auth/next";
import { getSearchParams } from "../utils";
import { Session, WithSessionHandler } from "@/types";

export const getSession = async () => {
  return getServerSession(authOptions) as Promise<Session>;
};

export const withSession =
  (handler: WithSessionHandler) =>
  async (req: Request, { params }: { params: Record<string, string> }) => {
    const session = await getSession();
    if (!session?.user.id) {
      return new Response("Unauthorized: Login required.", { status: 401 });
    }

    const searchParams = getSearchParams(req.url);
    return handler({ req, params, searchParams, session });
  };
