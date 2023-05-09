import * as React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import logoCycatz from "./logoCycatz.png";
import flipkart from "./flipkart.png";
import personImg from "./person.png";
import map from "./map.png";
import Chart from "react-apexcharts";
import DiamondIcon from "@mui/icons-material/Diamond";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BalconyIcon from "@mui/icons-material/Balcony";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export default function UserTable() {
  const [open, setOpen] = React.useState(false);
  const [openVendor, setOpenVendor] = React.useState(false);

  useEffect(() => {
    document.body.style.zoom = "100%";
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickVendor = () => {
    setOpenVendor(!openVendor);
  };

  return (
    <div style={{ width: "77rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <Card
            style={{
              boxShadow: "none",
              maxWidth: "297px",
              height: "100px",
              marginBottom: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logoCycatz} alt="Logo" />
          </Card>

          <List
            sx={{
              width: "100%",
              maxWidth: "297px",
              bgcolor: "background.paper",
              borderRadius: "1rem",
              background:
                "linear-gradient(185.52deg, #1AB5F2 -28.11%, #000000 134.62%)",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "700",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon style={{ color: "#ffffff" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <BalconyIcon style={{ color: "#ffffff" }} />
              </ListItemIcon>
              <ListItemText primary="Vulnerabilities" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <LocalDiningIcon style={{ color: "#ffffff" }} />
              </ListItemIcon>
              <ListItemText primary="Attack Surface" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Attack" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>
                <DatasetLinkedIcon style={{ color: "#ffffff" }} />
              </ListItemIcon>
              <ListItemText primary="Dark Web" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TravelExploreIcon style={{ color: "#ffffff" }} />
              </ListItemIcon>
              <ListItemText primary="Surfaceweb" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TrendingUpIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="Brand Monitoring" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TrendingUpIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="Thread Feed" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <StayPrimaryPortraitIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="Mobile" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: "#ffffff" }} />
              </ListItemIcon>
              <ListItemText primary="Email Security" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TrendingUpIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="Incident / Report" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <TrendingUpIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="CSPM" />
            </ListItemButton>
            <ListItemButton onClick={handleClickVendor}>
              <ListItemIcon>
                <TrendingUpIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="Vendor Risk Posture" />
              {openVendor ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openVendor} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Attack Surface Manager" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Dark Web" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Surface Web" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="Intergration" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <SettingsSuggestIcon style={{ color: "#ffffff" }} />{" "}
              </ListItemIcon>
              <ListItemText primary="Settings" />
              <ExpandMore />
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={9.5}>
          <Card
            style={{
              boxShadow: "none",
              marginBottom: "1rem",
              borderRadius: "1rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ padding: "10px" }}>
                <Button
                  startIcon={<img src={flipkart} alt="flipkart" />}
                  style={{
                    backgroundColor: "#F3F3F3",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "12px",
                    textTransform: "capitalize",
                    borderRadius: "9px",
                    marginRight: "20rem",
                  }}
                >
                  <span style={{ marginRight: "2rem" }}>Flipkart </span>
                </Button>
              </div>
              <div>
                <div style={{ padding: "5px", float: "right" }}>
                  <div>
                    {/* <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    /> */}
                    <img
                      src={personImg}
                      alt="personImg"
                      style={{ width: "2.75rem", height: "2.75rem" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "10px", float: "right" }}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      startIcon={<DiamondIcon />}
                      style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "12px",
                        textTransform: "capitalize",
                        borderRadius: "9px",
                        background:
                          "linear-gradient(100.71deg, #E9B435 17.29%, #202124 260.67%)",
                      }}
                    >
                      <span style={{ marginRight: "1rem" }}>Premium </span>
                    </Button>
                    <Button
                      startIcon={<SupportAgentIcon />}
                      style={{
                        backgroundColor: "#F3F3F3",
                        color: "#000000",
                        fontWeight: 700,
                        fontSize: "12px",
                        textTransform: "capitalize",
                        borderRadius: "9px",
                      }}
                    >
                      Help Desk
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
            <Divider style={{ margin: "3rem 0 3rem 0" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "0 1.5rem",
              }}
            >
              <div
                style={{
                  boxShadow: "none",
                  borderRadius: "1rem",
                  backgroundColor: "#C8FACD",
                  width: "10rem",
                  height: "12rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    top: "2.5rem",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1693C4",
                  }}
                >
                  Services
                </div>
                <div
                  style={{
                    position: "relative",
                    top: "2.5rem",
                    color: " #046387",
                    fontSize: "48px",
                    fontWeight: 700,
                  }}
                >
                  6
                </div>
              </div>
              <div
                style={{
                  boxShadow: "none",
                  borderRadius: "1rem",
                  backgroundColor: "#C8FACD",
                  width: "10rem",
                  height: "12rem",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1693C4",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  Compliance <br />
                  issue
                </div>
                <div
                  style={{
                    color: " #046387",
                    fontSize: "48px",
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: "0.9rem",
                  }}
                >
                  50
                </div>

                <div
                  style={{
                    borderTop: "1.5px solid #BFBEBE",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    24
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    25
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    67
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "none",
                  borderRadius: "1rem",
                  backgroundColor: "#D0F2FF",
                  width: "10rem",
                  height: "12rem",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1693C4",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  Vulnerable <br />
                  Resources
                </div>
                <div
                  style={{
                    color: " #046387",
                    fontSize: "48px",
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: "0.9rem",
                  }}
                >
                  500
                </div>

                <div
                  style={{
                    borderTop: "1.5px solid #BFBEBE",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    250
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    100
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    10
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "none",
                  borderRadius: "1rem",
                  backgroundColor: "#FFF7CD",
                  width: "10rem",
                  height: "12rem",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1693C4",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  Resolved <br />
                  Issues
                </div>
                <div
                  style={{
                    color: " #046387",
                    fontSize: "48px",
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: "0.9rem",
                  }}
                >
                  230
                </div>

                <div
                  style={{
                    borderTop: "1.5px solid #BFBEBE",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    10
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    12
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    20
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "none",
                  borderRadius: "1rem",
                  backgroundColor: "#CBFFFC",
                  width: "10rem",
                  height: "12rem",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1693C4",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  Resolved <br />
                  Issues
                </div>
                <div
                  style={{
                    color: " #046387",
                    fontSize: "48px",
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: "0.9rem",
                  }}
                >
                  230
                </div>

                <div
                  style={{
                    borderTop: "1.5px solid #BFBEBE",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    10
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    12
                  </div>
                  <div
                    style={{ border: "0.5px solid #BFBEBE", height: "47px" }}
                  ></div>
                  <div
                    style={{
                      paddingTop: "14px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    20
                  </div>
                </div>
              </div>
            </div>
            <Divider style={{ margin: "2rem 0 2rem 0" }} />
            <Grid container sx={{ pl: 6 }}>
              <Grid item xs={6} spacing={2} style={{ display: "flex" }}>
                <Grid item>
                  {" "}
                  <div
                    style={{
                      boxShadow: "none",
                      borderRadius: "1rem",
                      backgroundColor: "#40CE0E",
                      width: "12rem",
                      height: "16rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        top: "5rem",
                        color: "#000000",
                        fontSize: "48px",
                        fontWeight: 400,
                      }}
                    >
                      2
                    </div>
                    <div
                      style={{
                        position: "relative",
                        top: "9.5rem",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#000000",
                      }}
                    >
                      GCP
                    </div>
                  </div>
                </Grid>
                <Grid item style={{ paddingLeft: "1rem" }}>
                  <div
                    style={{
                      boxShadow: "none",
                      borderRadius: "1rem",
                      backgroundColor: "#8743DD",
                      width: "12rem",
                      height: "7.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        top: "1rem",
                        color: "#ffffff",
                        fontSize: "48px",
                        fontWeight: 500,
                      }}
                    >
                      6
                    </div>
                    <div
                      style={{
                        position: "relative",
                        top: "1.7rem",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#ffffff",
                      }}
                    >
                      AWS
                    </div>
                  </div>
                  <div
                    style={{
                      boxShadow: "none",
                      borderRadius: "1rem",
                      backgroundColor: "#FF8F28",
                      width: "12rem",
                      height: "7.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        top: "1rem",
                        color: "#000000",
                        fontSize: "48px",
                        fontWeight: 500,
                      }}
                    >
                      6
                    </div>
                    <div
                      style={{
                        position: "relative",
                        top: "1.7rem",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#000000",
                      }}
                    >
                      AZURE
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Chart
                    options={{
                      dataLabels: {
                        enabled: false,
                      },
                      labels: [
                        "Project 1 - 1000",
                        "Project 2 - 500",
                        "Project 3 - 1000",
                      ],
                      colors: ["#43DD93", "#2894FF", "#E59D5B"],
                      plotOptions: {
                        pie: {
                          donut: {
                            size: "65%",
                            background: "transparent",
                            labels: {
                              show: true,
                              name: {
                                show: true,
                                fontSize: "22px",
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontWeight: 600,
                                color: "grey",
                                offsetY: -10,
                                formatter: function (val) {
                                  return val;
                                },
                              },
                              value: {
                                show: true,
                                fontSize: "22px",
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontWeight: 400,
                                color: undefined,
                                offsetY: 16,
                                formatter: function (val) {
                                  return val;
                                },
                              },
                              total: {
                                show: true,
                                showAlways: true,
                                label: "Assets",
                                fontSize: "14px",
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontWeight: 100,
                                color: "grey",
                                formatter: function (w) {
                                  return w.globals.seriesTotals.reduce(
                                    (a, b) => {
                                      return a + b;
                                    },
                                    0
                                  );
                                },
                              },
                            },
                          },
                        },
                      },
                    }}
                    series={[3000, 500, 500]}
                    type="donut"
                    width="380"
                  />
                </div>
              </Grid>
            </Grid>
            <Divider style={{ margin: "2rem 0 2rem 0" }} />
            <div>
              <Chart
                options={{
                  xaxis: {
                    categories: [
                      "Firewall Ingress...",
                      "Instance without...",
                      "Not encrypted with...",
                      "Instance without...",
                      "Not encrypted with...",
                    ],
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 4,
                      horizontal: true,
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#43DD93"],
                }}
                series={[
                  {
                    name: "Series 1",
                    data: [45, 50, 25, 32, 10],
                  },
                ]}
                type="bar"
                height={380}
                width={800}
              />
            </div>
            <Divider style={{ margin: "2rem 0 2rem 0" }} />
            <Grid container sx={{ pl: 6 }}>
              <Grid item xs={6}>
                <div>
                  <Chart
                    options={{
                      dataLabels: {
                        enabled: false,
                      },
                      labels: [
                        "Project 1 - 1000",
                        "Project 2 - 500",
                        "Project 3 - 1000",
                      ],
                      colors: ["#DDCE43", "#2894FF", "#E59D5B"],
                      plotOptions: {
                        pie: {
                          donut: {
                            size: "65%",
                            background: "transparent",
                            labels: {
                              show: true,
                              name: {
                                show: true,
                                fontSize: "22px",
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontWeight: 600,
                                color: "grey",
                                offsetY: -10,
                                formatter: function (val) {
                                  return val;
                                },
                              },
                              value: {
                                show: true,
                                fontSize: "22px",
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontWeight: 400,
                                color: undefined,
                                offsetY: 16,
                                formatter: function (val) {
                                  return val;
                                },
                              },
                              total: {
                                show: true,
                                showAlways: true,
                                label: "Assets",
                                fontSize: "14px",
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontWeight: 100,
                                color: "grey",
                                formatter: function (w) {
                                  return w.globals.seriesTotals.reduce(
                                    (a, b) => {
                                      return a + b;
                                    },
                                    0
                                  );
                                },
                              },
                            },
                          },
                        },
                      },
                    }}
                    series={[3000, 500, 500]}
                    type="donut"
                    width="380"
                  />
                </div>
              </Grid>
              <Grid item xs={6} spacing={2} style={{ display: "flex" }}>
                <img
                  src={map}
                  alt="map"
                  style={{ width: "27rem", height: "15rem" }}
                />
              </Grid>
            </Grid>
            <Divider style={{ margin: "2rem 0 2rem 0" }} />
            <div>
              <Chart
                options={{
                  xaxis: {
                    categories: [
                      "Firewall Ingress...",
                      "Instance without...",
                      "Not encrypted with...",
                      "Instance without...",
                      "Not encrypted with...",
                    ],
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 4,
                      horizontal: false,
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#43DD93"],
                }}
                series={[
                  {
                    name: "Series 1",
                    data: [15, 50, 10, 40, 10],
                  },
                ]}
                type="bar"
                height={380}
                width={800}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
