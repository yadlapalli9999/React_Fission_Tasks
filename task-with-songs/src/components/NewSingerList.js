import React, { useState } from "react";

let NewSingerList = () => {
  const [singerLists, setSingerList] = useState([
    {
      id: 1,
      singerName: "Balu",
      songsList: [
        { id: 1, songName: "aaa", playCount: 0 },
        { id: 2, songName: "bbb", playCount: 0 },
      ],
      royality: 0,
    },
    {
      id: 2,
      singerName: "Geetha",
      songsList: [
        { id: 1, songName: "ccc", playCount: 0 },
        { id: 2, songName: "ddd", playCount: 0 },
      ],
      royality: 0,
    },
  ]);

  let handleIncr = (id, singerName) => {
    singerLists.forEach((singer, singerIndex) => {
      let royality = 0;
      singer.songsList.forEach((song, songIndex) => {
        if (id === song.id && singerName === singer.singerName) {
          singerLists[singerIndex].songsList[songIndex].playCount = song.playCount + 1;
        }
        royality += song.playCount*500;
      });
      singerLists[singerIndex].royality = royality;
    });
    console.log(singerLists);
    setSingerList([ ...singerLists ]);
  };

  return (
    <React.Fragment>
      <div className="section p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-secondary" style={{ fontWeight: "bold" }}>
                Singer List
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table ">
                <thead className="bg-secondary text-white text-center">
                  <tr>
                    <th>Singer Name</th>
                    <th>Song Name</th>
                    <th>playCount</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {singerLists.map((item) => {
                    return item.songsList.map((song, songIndex) => {
                      return (
                        <tr key={songIndex}>
                          <td>{item.singerName}</td>
                          <td>{song.songName}</td>
                          <td>
                            <button
                              onClick={() =>
                                handleIncr(song.id, item.singerName)
                              }
                              className="btn btn-sm btn-primary"
                            >
                              PlayCount {song.playCount}
                            </button>
                          </td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {singerLists.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>{item.singerName} royality: {item.royality}</li>
                  </ul>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewSingerList;