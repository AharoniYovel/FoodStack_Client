import React from "react";
import { useParams } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { API_URL, doApiMethod, VOLUNTEERS } from "../services/apiService";
import { toast } from "react-toastify";

export default function ItemPath({ item }) {
  const params = useParams();

  const doApiAddPath = async (_idOfPath) => {
    try {
      let url = API_URL + VOLUNTEERS + "/addPathToVol";
      let resp = await doApiMethod(url, "PUT", { _idOfPath });
      console.log(resp.data);
    } catch (err) {
      console.log(err.response);
      toast.error("User or Password wrong");
    }
  };

  return (
    <div className="col-md-3 p-2">
      <div className="p-2 border border-dark shadow-lg h-100 rounded-3">
        <Fab
          onClick={() => {
            window.confirm("are you sure?") && doApiAddPath(item._id);
          }}
          className="float-end"
          color="secondary"
          size="medium"
          aria-label="add"
        >
          <AddIcon />
        </Fab>

        <h3>
          ID of Path: <span className="text-warning"> {item.path_id}</span>
        </h3>
        <h4>
          <HouseIcon className="fs-2" /> Family's: {item.arr_points_id.length}
        </h4>
        <h4>
          <LocationCityIcon className="fs-2" /> Citys:{" "}
          {item.arr_citys.map((element, i) => {
            return (
              <span key={i}>
                {element}
                {i !== item.arr_citys.length - 1 ? "," : ""}
              </span>
            );
          })}
          .
        </h4>
      </div>
    </div>
  );
}
