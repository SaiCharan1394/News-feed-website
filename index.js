function getNewsFeed() {
  console.log("get news feed was called");
  try {
    const data = fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/indiansports.rss"
    );
    console.log("getNewsFeed", data);
    return data;
  } catch (error) {}
}
export { getNewsFeed };
