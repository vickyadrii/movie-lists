import { useEffect } from "react";

import ListTitle from "@/components/common/ListTitle";

const Favorite = () => {
  useEffect(() => {
    document.title = "Favorite page | Technical Test Seryu Cargo";
  }, []);

  return (
    <div>
      <ListTitle title="Your Favorite Movies" />
    </div>
  );
};

export default Favorite;
