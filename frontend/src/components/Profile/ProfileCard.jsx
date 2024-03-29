import React, { useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByRoomId,
  getProductsByUserId,
} from "../../redux/actions/productAction";
import Avatar from "@mui/material/Avatar";
import { ListAltRounded, InfoRounded } from "@mui/icons-material";
import { getReportByUserId } from "../../redux/actions/reportAction";
import ProductList from "../products/ProductList";
import Product from "../products/Product";
import "./Profile.css";
import SingleReportCard from "../Reports/SingleReportCard";
import StaffDashboard from "./StaffDashboard";
import DynamicTable from "./DynamicTable";
import AiSuggestionComponent from "../Reports/AiSuggestionComponent";
const ProfileCard = () => {
  const dispatch = useDispatch();

  const userProductList = useSelector((state) => state.products);
  const roomProductList = useSelector((state) => state.roomProducts);
  const auth = useSelector((state) => state.auth);
  const userReportList = useSelector((state) => state.reports);
  const [prompt, setPrompt] = React.useState(false);

  console.log("Profile:", auth);
  useEffect(() => {
    dispatch(getProductsByUserId(auth.id));
    dispatch(getProductsByRoomId(auth.userData.room_id));
    dispatch(getReportByUserId(auth.id));
    setPrompt(true);
  }, [dispatch]);

  console.log("User:", userProductList.length);
  console.log("Room:", roomProductList);
  console.log("Report:", userReportList);
  // Original array of objects
  const originalArray = roomProductList;
  const originalArray2 = userReportList;
  // Keys to copy
  const keysToCopy = ["name", "details", "type", "id"];
  const keysToCopy2 = ["report_description", "report_type", "report_status", "id"];

  // Copy array based on the keys
  const copiedArray = originalArray.map((obj) => {
    const newObj = {};
    keysToCopy.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  });
  const copiedArray2 = originalArray2.map((obj) => {
    const newObj = {};
    keysToCopy2.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  });
  console.log(copiedArray2);

  console.log(copiedArray);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: { xs: "auto", sm: "initial" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "block",
            width: "1px",
            bgcolor: "warning.300",
            left: "500px",
            top: "-24px",
            bottom: "-24px",
            "&::before": {
              top: "4px",
              content: '"vertical"',
              display: "block",
              position: "absolute",
              right: "0.5rem",
              color: "text.tertiary",
              fontSize: "sm",
              fontWeight: "lg",
            },
            "&::after": {
              top: "4px",
              content: '"horizontal"',
              display: "block",
              position: "absolute",
              left: "0.5rem",
              color: "text.tertiary",
              fontSize: "sm",
              fontWeight: "lg",
            },
          }}
        />
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            {/* <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          /> */}

            {/* src={"http://localhost:8000/uploads/" + product.image_name} */}
            <Avatar
              alt={auth?.name}
              src="http://localhost:8000/uploads/user.png"
            ></Avatar>
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {auth?.name}
            </Typography>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              {auth?.userData?.role?.name}
            </Typography>
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                gap: 2,
                "& > div": { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Assets
                </Typography>
                <Typography fontWeight="lg">
                  {userProductList.length + roomProductList.length}
                </Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Room
                </Typography>
                <Typography fontWeight="lg">
                  {auth?.userData?.room?.room_number}
                </Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Reports
                </Typography>
                <Typography fontWeight="lg">
                  {userReportList?.length}
                </Typography>
              </div>
            </Sheet>
            <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
              <Button variant="outlined" color="neutral">
                Details
              </Button>
              <Button variant="solid" color="warning">
                Edit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <div>
        <Typography variant="h1" fontWeight="lg">
          {" "}
          <ListAltRounded></ListAltRounded> My Asset
        </Typography>
      </div>
      <div className="horizontal-scroll-container">
        <div className="scroll-content">
          {roomProductList.length && (
            <DynamicTable data={copiedArray} tableName={"profile_product_list"}></DynamicTable>
          )}
          {/* {roomProductList.length &&
            roomProductList?.map((product) => {
              return (
                <div className="item">
                  <Product
                    product={product}
                    productList={product}
                    key={product.id}
                    setProduct={product[0]}
                  ></Product>
                </div>
              );
            })} */}
        </div>
      </div>
    

      <div>
        <Typography variant="h1" fontWeight="lg">
          {" "}
          <InfoRounded></InfoRounded> My Issues
        </Typography>
      </div>
      <div className="horizontal-scroll-container">
        <div className="scroll-content">
          {userReportList.length && (
            <DynamicTable data={copiedArray2} tableName={"profile_report_list"}></DynamicTable>
          )}
          {/* {userReportList.length &&
            userReportList?.map((report) => {
              return (
                <div className="item" style={{ width: "25%" }}>
                  <SingleReportCard
                    report={report}
                    history={report?.history}
                    component={"Profile"}
                  ></SingleReportCard>
                </div>
              );
            })} */}
        </div>
      </div>
    </>
  );
};
export default ProfileCard;
