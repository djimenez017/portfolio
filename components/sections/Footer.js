import React from "react";

export default function Footer() {
  return (
    <div class="flex flex-wrap items-center md:justify-between justify-center p-4">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright ©{" "}
          <span id="get-current-year">{new Date().getFullYear()} </span>
          by Daniel Jimenez
        </div>
      </div>
    </div>
  );
}
