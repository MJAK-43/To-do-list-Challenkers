import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";

let endpoint = "http://localhost:8080";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      etat:"",
      items: [],
    };
  }

  componentDidMount() {
    this.getTask();
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    let { task } = this.state;
    let { etat } = this.state;
     console.log("pRINTING task", this.state.task);
    // console.log("pRINTING etat", this.state.etat);
    if (task) {
      axios
        .post(
          endpoint + "/api/task",
          {
            task,
            etat,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          this.getTask();
          this.setState({
            task: "",
            etat:"",
          });
          console.log(res);
        });
    }
  };

  getTask = () => {
    axios.get(endpoint + "/api/task").then((res) => {
      if (res.data) {
        this.setState({
          items: res.data.map((item) => {
            let color = "yellow";
            let resulter = "button";
              let resultats = "en cours";
            let style = {
              wordWrap: "break-word",
            };

            if (item.status) {
              color = "green";
              resulter = "buttons";
                resultats = "fait";
              style["textDecorationLine"] = "line-through";

            }

            return (
              <Card key={item._id} color={color} fluid>
                <Card.Content>
                <div className="div1 div_all">
                    <div className="font" style={style}>{item.task}</div>
                </div>


                    <div className="div3 div_allss">
                    <Icon
                      name="check circle"
                      color="green"
                      onClick={() => this.updateTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Done</span>
                    <Icon
                      name="undo"
                      color="yellow"
                      onClick={() => this.undoTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Undo</span>
                    <Icon
                      name="delete"
                      color="red"
                      onClick={() => this.deleteTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Delete</span>
                </div>
                    <div className="div2 div_alls">
                        <div className="font" >
                            <button className={resulter} ><span> {resultats} </span></button>
                        </div>
                    </div>

                </Card.Content>
              </Card>
            );
          }),
        });
      } else {
        this.setState({
          items: [],
        });
      }
    });
  };

  updateTask = (id) => {
    axios
      .put(endpoint + "/api/task/" + id, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        this.getTask();
      });
  };

  undoTask = (id) => {
    axios
      .put(endpoint + "/api/undoTask/" + id, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        this.getTask();
      });
  };

  deleteTask = (id) => {
    axios
      .delete(endpoint + "/api/deleteTask/" + id, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        this.getTask();
      });
  };

  render() {
    return (
      <div>
        <div className="row">
            <p className="header"> TO-DO LIST</p>
        </div>
        <div className="row">

          <Form className="example" onSubmit={this.onSubmit}>

              <button className="tras"> <Input
                  className="inter"

              type="text"
              name="task"
              onChange={this.onChange}
              value={this.state.task}
              fluid
              placeholder="Create Task..."
              /></button>

            {/*<Input*/}
            {/*    type="text"*/}
            {/*    name="etat"*/}
            {/*    onChange={this.onChange}*/}
            {/*    value={this.state.etat}*/}
            {/*    fluid*/}
            {/*    placeholder="Etat de la tache: "*/}
            {/*/>*/}


              <button  className="buttons">Create Task</button>


          </Form>

        </div>
        <div className="row">
          <Card.Group>{this.state.items}</Card.Group>
        </div>
      </div>
    );
  }
}

export default ToDoList;
