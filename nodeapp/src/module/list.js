import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

import { Link } from "react-router-dom";

//sweetalert2
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class listComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEmployee: [],
    };
  }

  componentDidMount() {
    this.loadEmployee();
  }

  loadEmployee() {
    axios
      .get("http://localhost:3000/employee/list")
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setState({ listEmployee: data });
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server " + error);
      });
  }

  render() {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th>1</th>
            <td>Admin</td>
            <td>John Smitth</td>
            <td>jhonsmith@mail.com</td>
            <td>California</td>
            <td>317785847</td>
            <td>
              <button class="btn btn-outline-info "> Edit </button>
            </td>
            <td>
              <button class="btn btn-outline-danger "> Delete </button>
            </td>
          </tr> */}
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  loadFillData() {
    return this.state.listEmployee.map((data) => {
      return (
        <tr>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <Link class="btn btn-outline-info" to={"/edit/" + data.id}>
              Edit
            </Link>
          </td>
          <td>
            <button
              class="btn btn-outline-danger"
              onClick={() => this.onDelete(data.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });
  }

  onDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "Menghapus Data User Dengan Id " + id,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  sendDelete(userId) {
    // url de backend
    const baseUrl = "http://localhost:3000/employee/delete"; // parameter data post
    // network
    axios
      .post(baseUrl, {
        id: userId,
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          this.loadEmployee();
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
}

export default listComponent;
