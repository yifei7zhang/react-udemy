import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/new" component={StreamCreate} />
          <Route path="/edit" component={StreamEdit} />
          <Route path="/delete" component={StreamDelete} />
          <Route path="/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
