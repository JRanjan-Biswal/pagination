import axios from "axios";
import List from "@mui/material/List";
import { Pagination, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

import CardPagination from "./card";

function ListOfIssues(props) {
<<<<<<< HEAD

  const [fullData, setFullData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [countPerPage, setCountPerPage] = useState(7);
  
=======
  //   const [totalNumberOfIssues, setTotalNumberOfIssues] = useState(0);
  const [fullData, setFullData] = useState([]);
  const [pageNumber, setPageNumber] = useState();
  const [countPerPage, setCountPerPage] = useState();
  const [reload, setReload] = useState();

  let per_page = !localStorage.per_page ? 7 : localStorage.per_page;
  let page_num = !localStorage.page_num ? 1 : localStorage.page_num;
>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59

  useEffect(() => {
    const loadIssuesPosts = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/issues?q=repo:freecodecamp/freecodecamp state:open&per_page=100`
        );

        setFullData([...response.data.items]);
      } catch (error) {
        alert(error);
      }
    };
    loadIssuesPosts();
  }, []);

<<<<<<< HEAD

  const start = countPerPage * pageNumber - countPerPage;
  const end = countPerPage * pageNumber - 1;

  const changePerPage = (e, value) => {
    const val = parseInt(value);

    if(e.keyCode == 13){
    if (!val) {
      alert("Enter a valid number")
    } else if (val > 20) {
      alert(
        "Add a smaller Number! Adding such a number might create confusion between 1-20"
      );
    } else if (val < 1) {
      alert("lets take a bigger number. between 1-20")
    }
    else {
      setCountPerPage(val);
    }
  }
=======
  const start = parseInt(per_page) * parseInt(page_num) - parseInt(per_page);
  const end = parseInt(per_page) * parseInt(page_num) - 1;

  const changePerPage = (value) => {
    const val = parseInt(value);
    console.log(val == NaN, val);
    if (!val) {
      localStorage.per_page = 7;
      setCountPerPage(localStorage.per_page);
    } else if (val > 20) {
      alert(
        "Add a smaller Number! Adding such a bid number might become confusing"
      );
      localStorage.per_page = 7;
      setCountPerPage(localStorage.per_page);
    } else {
      setCountPerPage(val);
      localStorage.setItem("per_page", val);
    }
>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59
  };

  const changePageNumber = (e, val) => {
    setPageNumber(val);
<<<<<<< HEAD
  };

  const changePageNumberFromInput = (e, value) => {
    const val = parseInt(value);
    if (e.keyCode === 13) {
      if (!val) {
        alert("Enter a valid Number");
      } else if (val > Math.floor(100 / countPerPage)) {
        alert("please enter a valid number. There is no such page !");
      } else {
        setPageNumber(val);
=======
    localStorage.setItem("page_num", val);
  };

  const changePageNumberFromInput = (e, value) => {
    // alert(e.keyCode);
    const val = parseInt(value);
    if (e.keyCode === 13) {
      if (!val) {
        localStorage.setItem("page_num", 7);
        setPageNumber(7);
        alert("Enter a valid Number");
      } else {
        setPageNumber(val);
        localStorage.setItem("page_num", val);
>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59
      }
    }
  };

<<<<<<< HEAD
=======
  // console.log("only-required->", fullData);

>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59
  return (
    <div>
      <List dense sx={{ width: "100%", backgroundColor: "background.paper" }}>
        {(() => {
          let arr = [];
          for (let i = start; i <= end; i++) {
            const data = fullData[i];

            if (fullData.length > 0) {
              arr.push(<CardPagination props={data} />);
            }
          }
          return arr;
        })()}
      </List>

      <div>
        <Stack spacing={2} className="paginationStack">
          <div>
            No. of Issues Per Page :{" "}
            <input
<<<<<<< HEAD
              placeholder="PRESS ENTER"
              className="input"
              onKeyUp={(e, value) => {
                changePerPage(e, e.target.value);
              }}
            />
          </div>
          <div>Currently on PageNumber: {pageNumber}</div>
=======
              placeholder="No. of issues per page"
              className="input"
              onChange={(e, value) => {
                changePerPage(e.target.value);
              }}
            />
          </div>
          <div>Currently on PageNumber: {page_num}</div>
>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59
          <div>
            Go to Page :{" "}
            <input
              style={{ width: "10em" }}
<<<<<<< HEAD
              placeholder="PRESS ENTER"
=======
              placeholder="Press Enter"
>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59
              className="input"
              onKeyUp={(e, value) => {
                changePageNumberFromInput(e, e.target.value);
              }}
            />
          </div>
          <div style={{ margin: "1em auto" }}>
            <Pagination
              variant="outlined"
              shape="rounded"
<<<<<<< HEAD
              count={Math.floor(100 / countPerPage)}
=======
              count={Math.ceil(100 / parseInt(per_page))}
>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59
              onChange={(e, value) => {
                changePageNumber(e, value);
              }}
            />
          </div>
        </Stack>
<<<<<<< HEAD

=======
        {/* <button onClick={()=>setReload(2)}></button> */}
>>>>>>> cd83daff77543cf5bd52298c539fb1654c7d8f59
      </div>
    </div>
  );
}

export default ListOfIssues;
