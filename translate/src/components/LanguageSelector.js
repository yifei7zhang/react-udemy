import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag ca"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag cn"
          onClick={() => this.context.onLanguageChange("chinese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
