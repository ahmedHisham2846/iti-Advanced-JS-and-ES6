function getCourseInfo(options = {}) {
  let defaultInfo = {
    courseName: "Defalut Course Name",
    courseDuation: "Defalut Course Duration",
    courseOwner: "Defalut Course Owner",
  };

  Object.assign(defaultInfo, options);

  return `course name: ${defaultInfo.courseName}, course duation: ${defaultInfo.courseDuation}, course owner: ${defaultInfo.courseOwner}`;
}

let result = getCourseInfo({
    courseName: "ES6",
    courseDuation: "3 hours",
    courseOwner: "Eng. Sara Atef",
});
console.log(result);
