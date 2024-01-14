import React from "react";

function Copyright({ companyName }: { companyName: string }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-4 text-left">
      <p className="text-xs">
        &copy; {currentYear} {companyName}. All rights reserved.
      </p>
    </div>
  );
}

export default Copyright;
