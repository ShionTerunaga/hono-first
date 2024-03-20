import { createRoute } from "honox/factory";
import { Top } from "../view/top";

export default createRoute((c) => {
  const name = "sample app";

  return c.render(<Top name={name} />, { title: name });
});
