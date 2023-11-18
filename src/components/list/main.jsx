import getListByUser from "@/utils/server/getListbyUser";

import Wrapper from "./item-settings-wrapper";

export default async function ListMain({user}) {

  const list = await getListByUser(user.id);

  return (
    <div>
      {/* <i className="symbol">checklist</i> */}
      <h2 className="text-xl">My Todos</h2>
      <Wrapper list={list} />
    </div>
  );
}
