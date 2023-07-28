async function getNewsFeed() {
    console.log("get news feed was called");
    try {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/indiansports.rss"
      );
  
      if (!response.ok) {
        throw new Error("Failed");
      }
      const data = await response.json();
      console.log("getNewsFeed", data);
      return data;
    } catch (error) {
      // Handle the error here if needed
      console.error("Error in getNewsFeed:", error);
      throw error; // Rethrow the error to propagate it further if desired
    }
  }
  
export { getNewsFeed };
  