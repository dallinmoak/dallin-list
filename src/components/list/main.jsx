import ListItem from "./item";
import getListByUser from "@/utils/server/getListbyUser";

export default async function ListMain({user}) {

  const list = await getListByUser(user.id);

  return (
    <div>
      <i className="symbol">checklist</i>
      here is the main list
      {list.map((item) => {
        return <ListItem item={item} />;
      })}
    </div>
  );
}
