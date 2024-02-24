import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "../StyleProject/InformationProject.css";
import { Button, Card, Container, IconButton } from "@mui/material";
export default function ProjectDetails() {
  const handleBacke=()=>{
  
  }
  return (
    <>
      <div
        style={{ backgroundColor: "#f4f5f7", height: "100vh" }}
        className="m-0 pt-0 "
      >
        <div className="d-flex justify-content-center align-items-center h-100 ">
          <div
            className=" container  "
            style={{
              backgroundColor: "white",
              maxWidth: "100%",
              borderRadius: "25px",
            textAlign:"center",
            }}
          >
            <div className="" style={{ borderRadius: ".5rem" }}>
              <div className="headerProfile pb-4">
                <div className="d-flex justify-content-center mt-3 ">
                  <div>
                    <img
                      src="ImageCompany/msg6888060634-164265.jpg"
                      alt="User Avatar"
                      className=""
                      width={"100"}
                    />
                    <div className="mt-3">
                      <p>
                        <span style={{ color: "#b82ce9", fontWeight: "700" }}>
                          {" "}
                          THE GENERAL COMPANY
                        </span>{" "}
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
    <div className="linrow"></div>
              <div className="d-flex justify-content-center align-items-center MOReSTyle">
                <Card className="">
                  <div className=" ">
                  </div>
                </Card>
                <Card className="">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="textColumCenter"></div>
                  </div>
                </Card>
              </div>
              <div className="textleftend ">
                <Button onClick={handleBacke}>back</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
