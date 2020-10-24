import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// PUBLIC API: https://quotes.rest/

function QuoteView() {
  // We are setting our quote state to an empty string by default
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // This will run once when our component first loads
  useEffect(function() {
    // Use Axios to make a GET request
    axios
      .get("https://quotes.rest/qod")
      .then(function(response) {
        // Let's take a look at our response--what data did we get?
        console.log(response);

        // TODO:
        // 1. Pick apart our response in the console and find the quote!
        // 2. Update our state to display this quote!
        // 3. Also find the author and update that as well!

        setQuote("");
        setAuthor("");
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="section">
      <h2>Quote of the day:</h2>

      <blockquote className="fancy">{quote}</blockquote>
      <i> - {author} </i>
    </div>
  );
}

// This line is important! So other files can use this
export default QuoteView;
