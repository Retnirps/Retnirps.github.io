function countTags() {
    let items = document.getElementsByTagName("*");
    let tags = [];
    for (let i = 0; i < items.length; i++) {
        tags[i] = items[i].tagName;
    }
    let uniqueTags = [...new Set(tags)];
    let tagsCount = "";
    for (let i = 0; i < uniqueTags.length; i++) {
        tagsCount += uniqueTags[i] + ": " + document.getElementsByTagName(uniqueTags[i]).length + "\n";
    }
    alert(tagsCount);
}
