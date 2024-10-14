import React from "react";

interface GlobalProps {
  header: string;
  desc: string;
}

const Global = ({ header, desc }: GlobalProps) => {
  return (
    <div>
      <div className="bg-red-700">
        <h1>{header}</h1>
      </div>
      <div className="bg-purple-700">{desc}</div>
    </div>
  );
};

export default Global;
