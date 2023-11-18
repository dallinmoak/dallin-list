import getListByUser from "@/utils/server/getListbyUser";

import Wrapper from "./item-settings-wrapper";

export default async function ListMain({user}) {

  const list = await getListByUser(user.id);

  return (
    <div>
      <i className="symbol">checklist</i>
      here is the main list
      <Wrapper list={list} />
    </div>
  );
}
