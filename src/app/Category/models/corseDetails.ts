export interface CourseDetailsRequest{
    courseID: number;
    courseName:string;
    courseCode:string;
    semester:number;
    level:number;
    category:string;
    startDate: string;
    endDate: string;
}