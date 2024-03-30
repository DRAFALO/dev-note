export const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // định dạng văn bản
    ["clean"], // xóa định dạng
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // tiêu đề
    [{ font: [] }], // font chữ
    [{ align: [] }], // căn chỉnh
    [{ color: [] }, { background: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["blockquote", "code-block"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "align",
  "script",
  "code-block",
  "clean",
];
