import React from "react";

export default function Threeimg() {
  return (
    <div className="max-w-[1350px] grid lg:grid-cols-3 m-auto gap-5   md:mt-[50px] md:ms-4 md:me-4  m-5 ">
      <div className="border border-black min-h-[300px] relative rounded-[15px] m-4 min-w-[360px]">
        <img
          src="../img/single.png"
          className="w-[100px] m-auto absoute top-3"
        />
        <p  className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, facere
          aspernatur! Vel odit sit nam quae molestiae sequi modi amet! Amet
          saepe accusamus facere reiciendis rem cumque! Possimus quis cumque
          repellat officia rerum adipisci quos, quia optio aliquam, voluptatibus
          non.
        </p>
        <button className="bg-black text-white p-3 rounded font-bold w-[150px]  m-4 ms-2">Info</button>
      </div>
      <div className="border border-black min-h-[300px] rounded-[15px] m-4 min-w-[360px]">
        <img src="../img/double.png" className="w-[100px] m-auto  " />
        <p  className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, facere
          aspernatur! Vel odit sit nam quae molestiae sequi modi amet! Amet
          saepe accusamus facere reiciendis rem cumque! Possimus quis cumque
          repellat officia rerum adipisci quos, quia optio aliquam, voluptatibus
          non.
        </p>
        <button className="bg-black text-white p-3 rounded font-bold w-[150px] m-4 ms-2">Info</button>
      </div>
      <div className="border border-black min-h-[300px] rounded-[15px] m-4 min-w-[360px]">
        <img src="../img/triple.png" className="w-[100px] m-auto " />
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, facere
          aspernatur! Vel odit sit nam quae molestiae sequi modi amet! Amet
          saepe accusamus facere reiciendis rem cumque! Possimus quis cumque
          repellat officia rerum adipisci quos, quia optio aliquam, voluptatibus
          non.
        </p>
        <button className="bg-black text-white p-3 rounded font-bold w-[150px] m-4 ms-2">Info</button>
      </div>
    </div>
  );
}
