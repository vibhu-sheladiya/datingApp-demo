import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import { Grid, IconButton, Switch } from "@mui/material";
import * as Icons from "@mui/icons-material";
import swal from "sweetalert";
import "../../scss/_custom.scss";
import {  plans,updatePlansStatus,deleteMultiPlan  } from '../../apiController';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Plans() {
  const navigate = useNavigate();
  // const [rows, setRows] = useState([]);
  const [datatableData, setdatatableData] = useState([]);

  const getData = async (data) => {
    await plans(data).then((res) => {
      setdatatableData(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    /* ---------------------------- COLUMNS FOR NAME ---------------------------- */
    {
      name: "planType",
      label: "Type",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
        name: "planName",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "price",
        label: "price",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "duration",
        label: "Limited Time",
        options: {
          filter: true,
          sort: true,
        },
      },
    {
        name: "limit",
        label: "limit",
        options: {
          filter: true,
          sort: true,
        },
      },
    /* --------------------------- COLUMNS FOR STATUS --------------------------- */
    {
      name: "status",
      label: "STATUS",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (_, { rowIndex }) => {
          // console.log(datatableData[rowIndex]);
          const { status, _id } = datatableData[rowIndex];
          return (
            // <p>asd</p>
            <Switch
              checked={status}
              onChange={() => {
                const data = { id: _id, status: !status };
                updatePlansStatus(data, _id)
                  .then(() => {
                    toast.success("status changed successfully!", {
                      key: data._id,
                    });
                    getData();

                  })
                  .catch(() => {
                    toast.error("something went wrong!", {
                      key: data._id,
                    });
                  });
              }}
            />
          );
        },
      },
    },
    /* --------------------------- COLUMNS FOR ACTIONS -------------------------- */
    {
      name: "_id",
      label: "ACTION",
      options: {
        customBodyRender: (value) => {
          const editdata = datatableData.find((data) => data._id === value);
          // console.log(editdata);
          return (
            <div>
              <Icons.Edit
                className="editIcon"
               
                onClick={() => {
                  const editdata = datatableData.find(
                    (data) => data._id === value
                  );
                  navigate("/AddPlans", {
                    state: { editdata: editdata },
                  });
                }}
              />
              <Icons.Delete
                className="deleteIcon"
               
                onClick={async () => {
                  const confirm = await swal({
                    title: "Are you sure?",
                    text: "Are you sure that you want to delete this user?",
                    icon: "warning",
                    buttons: ["No, cancel it!", "Yes, I am sure!"],
                    dangerMode: true,
                  });
                  if (confirm) {
                    // console.log(confirm);
                    await axios
                      .delete(
                        `http://localhost:9500/v1/plan/delete/${value}`,
                        value
                      )
                      .then((res) => {
                        toast.success("deleted successfully!");
                        getData();
                      })
                      .catch(() => {
                        toast.error("something went wrong!", { key: value,});
                      });
                  }
                }}
              />
            </div>
          );
        },
      },
    },
  ];


  const deleteMultiple = async (index) => {
    const id = index.data.map(
      (index1) =>
        datatableData.find(
          (data, index2) => index2 === index1.dataIndex && data._id
        )._id
    );
    const confirm = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this users?",
      icon: "warning",
      buttons: ["No, cancel it!", "Yes, I am sure!"],
      dangerMode: true,
    });
    if (confirm) {
      deleteMultiPlan(id)
        .then(() => {
          getData();
   
          toast.success("Deleted successfully!", {
            key: id,
          });
        })
        .catch(() => {
          toast.error("Something went wrong!", {
            key: id,
          });
        });
    }
  };


  


  const SelectedRowsToolbar = ({ selectedRows, data }) => {
    return (
      <div>
        <IconButton onClick={() => deleteMultiple(selectedRows, data)}>
          <Icons.Delete />
        </IconButton>
      </div>
    );
  };

  const options = {
    customToolbarSelect: (selectedRows, data) => (
      <SelectedRowsToolbar
        selectedRows={selectedRows}
        data={data}
        columns={columns}
        datatableTitle="test"
      />
    ),
  };
  return (
    <Grid>
      
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0 mb-3 ms-2">
          <ToastContainer />

            <li className="breadcrumb-item">
              <a className="" href="/">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Plans
            </li>
          </ol>
        </nav>
      </div>

      <Button
        style={{
          position: "absolute",
          top: 90,
          right: 30,
          borderRadius: 1,
          fontWeight: "bold",
          marginBottom: "10px",
          backgroundColor: "#ff4d67",
        }}
        variant="contained"
        onClick={() => {
          navigate("/AddPlans");
        }}>
        Add Plans
      </Button>

 

      <MUIDataTable
        title={"Plans"}
        data={datatableData}
        columns={columns}
        options={options}
      />
    </Grid>
  );
}
