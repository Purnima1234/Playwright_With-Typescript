interface BugReport{
    id: number;
    title: string;
    description: string;
    status: string[];

}

const bugReport: BugReport ={
    id: 1,
    title: "Sample Bug",
    description: "This is a sample bug report",
    status: ["open"]
}
const bugReport2: BugReport ={
    id: 2,
    title: "Sample Bug",
    description: "This is a sample bug report",
    status: ["open"]
}
const bugReport3: BugReport ={
    id: 3,
    title: "Sample Bug",
    description: "This is a sample bug report",
    status: ["open"]
}