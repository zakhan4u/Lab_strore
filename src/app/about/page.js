import Link from "next/link";
import React from "react"

const about = (props) => {
  return (
    <div>
         <Link href="/">
                home
            </Link>
      <h1 className="text-red-300 text-3xl">this is the about section</h1>
    </div>
  )
};

export default about;
