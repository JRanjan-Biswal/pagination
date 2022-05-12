import axios from "axios";
import List from "@mui/material/List";
import { Pagination, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

import CardPagination from "./card";

function ListOfIssues(props) {

  const [fullData, setFullData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [countPerPage, setCountPerPage] = useState(7);
  

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
  };

  const changePageNumber = (e, val) => {
    setPageNumber(val);
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
      }
    }
  };

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
              placeholder="PRESS ENTER"
              className="input"
              onKeyUp={(e, value) => {
                changePerPage(e, e.target.value);
              }}
            />
          </div>
          <div>Currently on PageNumber: {pageNumber}</div>
          <div>
            Go to Page :{" "}
            <input
              style={{ width: "10em" }}
              placeholder="PRESS ENTER"
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
              count={Math.floor(100 / countPerPage)}
              onChange={(e, value) => {
                changePageNumber(e, value);
              }}
            />
          </div>
        </Stack>

      </div>
    </div>
  );
}

export default ListOfIssues;
