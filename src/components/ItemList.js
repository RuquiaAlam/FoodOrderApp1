import { CDN_URL } from "../utils/constant";
import {useDispatch} from "react-redux";
import {addItem}  from "../utils/cartSlice"
const ItemList = ({ items ,dummy}) => {

  const dispacth=useDispatch();
  const handleAddItem=()=>
  {
//dispatch action
dispatch(addItem("pizza"))

  }
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
            <div className="w-9/12">
          <div className="py-2">
         
            <span>
              {item.card.info?.itemAttribute?.vegClassifier === "VEG"
                ? "🟩"
                : "🟥"}
            </span>
            <p className="text-sm">
              {item.card.info.name}-Rs.
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
                <button className=" py-2 px-4 mx-[30] mt-24 rounded-lg  items-center text-sm text-green-600 font-bold bg-white shadow-lg" onClick ={handleAddItem }>
ADD +
                </button>
            </div>

         
          <img  src={CDN_URL + item.card.info.imageId}  className="w-32 h-28" ></img>
           </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
