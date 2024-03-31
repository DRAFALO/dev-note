import React from "react";

import Content from "@/components/Detail/Content";

function Detail() {
  return (
    <section className="bg-gray-200">
      <div className="my-10 grid-cols-12 lg:grid">
        <div className="col-span-8 bg-white">
          <Content />
        </div>
      </div>
    </section>
  );
}

export default Detail;
