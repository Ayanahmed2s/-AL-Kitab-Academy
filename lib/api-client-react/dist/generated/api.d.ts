import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ActivityItem, Assignment, AssignmentInput, AssignmentList, AssignmentUpdate, AuthResponse, Class, DashboardSummary, ErrorResponse, GetAssignmentsParams, GetLessonsParams, GetStudentsParams, GetTeachersParams, HealthStatus, Lesson, LessonInput, LessonUpdate, LoginInput, Student, StudentInput, StudentList, StudentUpdate, Teacher, TeacherInput, TeacherList, TeacherUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getLoginUrl: () => string;
/**
 * @summary Mock login
 */
export declare const login: (loginInput: LoginInput, options?: RequestInit) => Promise<AuthResponse>;
export declare const getLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginInput>;
export type LoginMutationError = ErrorType<ErrorResponse>;
/**
* @summary Mock login
*/
export declare const useLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
export declare const getGetDashboardSummaryUrl: () => string;
/**
 * @summary Dashboard overview statistics
 */
export declare const getDashboardSummary: (options?: RequestInit) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: () => readonly ["/api/dashboard/summary"];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Dashboard overview statistics
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetRecentActivityUrl: () => string;
/**
 * @summary Recent activity feed
 */
export declare const getRecentActivity: (options?: RequestInit) => Promise<ActivityItem[]>;
export declare const getGetRecentActivityQueryKey: () => readonly ["/api/dashboard/recent-activity"];
export declare const getGetRecentActivityQueryOptions: <TData = Awaited<ReturnType<typeof getRecentActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRecentActivity>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRecentActivityQueryResult = NonNullable<Awaited<ReturnType<typeof getRecentActivity>>>;
export type GetRecentActivityQueryError = ErrorType<unknown>;
/**
 * @summary Recent activity feed
 */
export declare function useGetRecentActivity<TData = Awaited<ReturnType<typeof getRecentActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetStudentsUrl: (params?: GetStudentsParams) => string;
/**
 * @summary List all students
 */
export declare const getStudents: (params?: GetStudentsParams, options?: RequestInit) => Promise<StudentList>;
export declare const getGetStudentsQueryKey: (params?: GetStudentsParams) => readonly ["/api/students", ...GetStudentsParams[]];
export declare const getGetStudentsQueryOptions: <TData = Awaited<ReturnType<typeof getStudents>>, TError = ErrorType<unknown>>(params?: GetStudentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStudents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStudentsQueryResult = NonNullable<Awaited<ReturnType<typeof getStudents>>>;
export type GetStudentsQueryError = ErrorType<unknown>;
/**
 * @summary List all students
 */
export declare function useGetStudents<TData = Awaited<ReturnType<typeof getStudents>>, TError = ErrorType<unknown>>(params?: GetStudentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateStudentUrl: () => string;
/**
 * @summary Create a student
 */
export declare const createStudent: (studentInput: StudentInput, options?: RequestInit) => Promise<Student>;
export declare const getCreateStudentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, {
        data: BodyType<StudentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, {
    data: BodyType<StudentInput>;
}, TContext>;
export type CreateStudentMutationResult = NonNullable<Awaited<ReturnType<typeof createStudent>>>;
export type CreateStudentMutationBody = BodyType<StudentInput>;
export type CreateStudentMutationError = ErrorType<unknown>;
/**
* @summary Create a student
*/
export declare const useCreateStudent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, {
        data: BodyType<StudentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createStudent>>, TError, {
    data: BodyType<StudentInput>;
}, TContext>;
export declare const getGetStudentUrl: (id: string) => string;
/**
 * @summary Get student by ID
 */
export declare const getStudent: (id: string, options?: RequestInit) => Promise<Student>;
export declare const getGetStudentQueryKey: (id: string) => readonly [`/api/students/${string}`];
export declare const getGetStudentQueryOptions: <TData = Awaited<ReturnType<typeof getStudent>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStudent>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStudentQueryResult = NonNullable<Awaited<ReturnType<typeof getStudent>>>;
export type GetStudentQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get student by ID
 */
export declare function useGetStudent<TData = Awaited<ReturnType<typeof getStudent>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateStudentUrl: (id: string) => string;
/**
 * @summary Update a student
 */
export declare const updateStudent: (id: string, studentUpdate: StudentUpdate, options?: RequestInit) => Promise<Student>;
export declare const getUpdateStudentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStudent>>, TError, {
        id: string;
        data: BodyType<StudentUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateStudent>>, TError, {
    id: string;
    data: BodyType<StudentUpdate>;
}, TContext>;
export type UpdateStudentMutationResult = NonNullable<Awaited<ReturnType<typeof updateStudent>>>;
export type UpdateStudentMutationBody = BodyType<StudentUpdate>;
export type UpdateStudentMutationError = ErrorType<unknown>;
/**
* @summary Update a student
*/
export declare const useUpdateStudent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStudent>>, TError, {
        id: string;
        data: BodyType<StudentUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateStudent>>, TError, {
    id: string;
    data: BodyType<StudentUpdate>;
}, TContext>;
export declare const getDeleteStudentUrl: (id: string) => string;
/**
 * @summary Delete a student
 */
export declare const deleteStudent: (id: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteStudentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, {
    id: string;
}, TContext>;
export type DeleteStudentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteStudent>>>;
export type DeleteStudentMutationError = ErrorType<unknown>;
/**
* @summary Delete a student
*/
export declare const useDeleteStudent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteStudent>>, TError, {
    id: string;
}, TContext>;
export declare const getGetTeachersUrl: (params?: GetTeachersParams) => string;
/**
 * @summary List all teachers
 */
export declare const getTeachers: (params?: GetTeachersParams, options?: RequestInit) => Promise<TeacherList>;
export declare const getGetTeachersQueryKey: (params?: GetTeachersParams) => readonly ["/api/teachers", ...GetTeachersParams[]];
export declare const getGetTeachersQueryOptions: <TData = Awaited<ReturnType<typeof getTeachers>>, TError = ErrorType<unknown>>(params?: GetTeachersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTeachers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTeachers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTeachersQueryResult = NonNullable<Awaited<ReturnType<typeof getTeachers>>>;
export type GetTeachersQueryError = ErrorType<unknown>;
/**
 * @summary List all teachers
 */
export declare function useGetTeachers<TData = Awaited<ReturnType<typeof getTeachers>>, TError = ErrorType<unknown>>(params?: GetTeachersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTeachers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateTeacherUrl: () => string;
/**
 * @summary Create a teacher
 */
export declare const createTeacher: (teacherInput: TeacherInput, options?: RequestInit) => Promise<Teacher>;
export declare const getCreateTeacherMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTeacher>>, TError, {
        data: BodyType<TeacherInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTeacher>>, TError, {
    data: BodyType<TeacherInput>;
}, TContext>;
export type CreateTeacherMutationResult = NonNullable<Awaited<ReturnType<typeof createTeacher>>>;
export type CreateTeacherMutationBody = BodyType<TeacherInput>;
export type CreateTeacherMutationError = ErrorType<unknown>;
/**
* @summary Create a teacher
*/
export declare const useCreateTeacher: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTeacher>>, TError, {
        data: BodyType<TeacherInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTeacher>>, TError, {
    data: BodyType<TeacherInput>;
}, TContext>;
export declare const getGetTeacherUrl: (id: string) => string;
/**
 * @summary Get teacher by ID
 */
export declare const getTeacher: (id: string, options?: RequestInit) => Promise<Teacher>;
export declare const getGetTeacherQueryKey: (id: string) => readonly [`/api/teachers/${string}`];
export declare const getGetTeacherQueryOptions: <TData = Awaited<ReturnType<typeof getTeacher>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTeacher>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTeacher>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTeacherQueryResult = NonNullable<Awaited<ReturnType<typeof getTeacher>>>;
export type GetTeacherQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get teacher by ID
 */
export declare function useGetTeacher<TData = Awaited<ReturnType<typeof getTeacher>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTeacher>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateTeacherUrl: (id: string) => string;
/**
 * @summary Update a teacher
 */
export declare const updateTeacher: (id: string, teacherUpdate: TeacherUpdate, options?: RequestInit) => Promise<Teacher>;
export declare const getUpdateTeacherMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTeacher>>, TError, {
        id: string;
        data: BodyType<TeacherUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTeacher>>, TError, {
    id: string;
    data: BodyType<TeacherUpdate>;
}, TContext>;
export type UpdateTeacherMutationResult = NonNullable<Awaited<ReturnType<typeof updateTeacher>>>;
export type UpdateTeacherMutationBody = BodyType<TeacherUpdate>;
export type UpdateTeacherMutationError = ErrorType<unknown>;
/**
* @summary Update a teacher
*/
export declare const useUpdateTeacher: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTeacher>>, TError, {
        id: string;
        data: BodyType<TeacherUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTeacher>>, TError, {
    id: string;
    data: BodyType<TeacherUpdate>;
}, TContext>;
export declare const getDeleteTeacherUrl: (id: string) => string;
/**
 * @summary Delete a teacher
 */
export declare const deleteTeacher: (id: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteTeacherMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTeacher>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTeacher>>, TError, {
    id: string;
}, TContext>;
export type DeleteTeacherMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTeacher>>>;
export type DeleteTeacherMutationError = ErrorType<unknown>;
/**
* @summary Delete a teacher
*/
export declare const useDeleteTeacher: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTeacher>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTeacher>>, TError, {
    id: string;
}, TContext>;
export declare const getGetAssignmentsUrl: (params?: GetAssignmentsParams) => string;
/**
 * @summary List all assignments
 */
export declare const getAssignments: (params?: GetAssignmentsParams, options?: RequestInit) => Promise<AssignmentList>;
export declare const getGetAssignmentsQueryKey: (params?: GetAssignmentsParams) => readonly ["/api/assignments", ...GetAssignmentsParams[]];
export declare const getGetAssignmentsQueryOptions: <TData = Awaited<ReturnType<typeof getAssignments>>, TError = ErrorType<unknown>>(params?: GetAssignmentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssignments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAssignments>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAssignmentsQueryResult = NonNullable<Awaited<ReturnType<typeof getAssignments>>>;
export type GetAssignmentsQueryError = ErrorType<unknown>;
/**
 * @summary List all assignments
 */
export declare function useGetAssignments<TData = Awaited<ReturnType<typeof getAssignments>>, TError = ErrorType<unknown>>(params?: GetAssignmentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssignments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateAssignmentUrl: () => string;
/**
 * @summary Create an assignment
 */
export declare const createAssignment: (assignmentInput: AssignmentInput, options?: RequestInit) => Promise<Assignment>;
export declare const getCreateAssignmentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAssignment>>, TError, {
        data: BodyType<AssignmentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAssignment>>, TError, {
    data: BodyType<AssignmentInput>;
}, TContext>;
export type CreateAssignmentMutationResult = NonNullable<Awaited<ReturnType<typeof createAssignment>>>;
export type CreateAssignmentMutationBody = BodyType<AssignmentInput>;
export type CreateAssignmentMutationError = ErrorType<unknown>;
/**
* @summary Create an assignment
*/
export declare const useCreateAssignment: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAssignment>>, TError, {
        data: BodyType<AssignmentInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAssignment>>, TError, {
    data: BodyType<AssignmentInput>;
}, TContext>;
export declare const getGetAssignmentUrl: (id: string) => string;
/**
 * @summary Get assignment by ID
 */
export declare const getAssignment: (id: string, options?: RequestInit) => Promise<Assignment>;
export declare const getGetAssignmentQueryKey: (id: string) => readonly [`/api/assignments/${string}`];
export declare const getGetAssignmentQueryOptions: <TData = Awaited<ReturnType<typeof getAssignment>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssignment>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAssignment>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAssignmentQueryResult = NonNullable<Awaited<ReturnType<typeof getAssignment>>>;
export type GetAssignmentQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get assignment by ID
 */
export declare function useGetAssignment<TData = Awaited<ReturnType<typeof getAssignment>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssignment>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateAssignmentUrl: (id: string) => string;
/**
 * @summary Update an assignment
 */
export declare const updateAssignment: (id: string, assignmentUpdate: AssignmentUpdate, options?: RequestInit) => Promise<Assignment>;
export declare const getUpdateAssignmentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAssignment>>, TError, {
        id: string;
        data: BodyType<AssignmentUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAssignment>>, TError, {
    id: string;
    data: BodyType<AssignmentUpdate>;
}, TContext>;
export type UpdateAssignmentMutationResult = NonNullable<Awaited<ReturnType<typeof updateAssignment>>>;
export type UpdateAssignmentMutationBody = BodyType<AssignmentUpdate>;
export type UpdateAssignmentMutationError = ErrorType<unknown>;
/**
* @summary Update an assignment
*/
export declare const useUpdateAssignment: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAssignment>>, TError, {
        id: string;
        data: BodyType<AssignmentUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAssignment>>, TError, {
    id: string;
    data: BodyType<AssignmentUpdate>;
}, TContext>;
export declare const getDeleteAssignmentUrl: (id: string) => string;
/**
 * @summary Delete an assignment
 */
export declare const deleteAssignment: (id: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteAssignmentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAssignment>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAssignment>>, TError, {
    id: string;
}, TContext>;
export type DeleteAssignmentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAssignment>>>;
export type DeleteAssignmentMutationError = ErrorType<unknown>;
/**
* @summary Delete an assignment
*/
export declare const useDeleteAssignment: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAssignment>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAssignment>>, TError, {
    id: string;
}, TContext>;
export declare const getGetLessonsUrl: (params?: GetLessonsParams) => string;
/**
 * @summary List all lessons
 */
export declare const getLessons: (params?: GetLessonsParams, options?: RequestInit) => Promise<Lesson[]>;
export declare const getGetLessonsQueryKey: (params?: GetLessonsParams) => readonly ["/api/lessons", ...GetLessonsParams[]];
export declare const getGetLessonsQueryOptions: <TData = Awaited<ReturnType<typeof getLessons>>, TError = ErrorType<unknown>>(params?: GetLessonsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLessons>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLessons>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLessonsQueryResult = NonNullable<Awaited<ReturnType<typeof getLessons>>>;
export type GetLessonsQueryError = ErrorType<unknown>;
/**
 * @summary List all lessons
 */
export declare function useGetLessons<TData = Awaited<ReturnType<typeof getLessons>>, TError = ErrorType<unknown>>(params?: GetLessonsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLessons>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateLessonUrl: () => string;
/**
 * @summary Create a lesson
 */
export declare const createLesson: (lessonInput: LessonInput, options?: RequestInit) => Promise<Lesson>;
export declare const getCreateLessonMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createLesson>>, TError, {
        data: BodyType<LessonInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createLesson>>, TError, {
    data: BodyType<LessonInput>;
}, TContext>;
export type CreateLessonMutationResult = NonNullable<Awaited<ReturnType<typeof createLesson>>>;
export type CreateLessonMutationBody = BodyType<LessonInput>;
export type CreateLessonMutationError = ErrorType<unknown>;
/**
* @summary Create a lesson
*/
export declare const useCreateLesson: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createLesson>>, TError, {
        data: BodyType<LessonInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createLesson>>, TError, {
    data: BodyType<LessonInput>;
}, TContext>;
export declare const getGetLessonUrl: (id: string) => string;
/**
 * @summary Get lesson by ID
 */
export declare const getLesson: (id: string, options?: RequestInit) => Promise<Lesson>;
export declare const getGetLessonQueryKey: (id: string) => readonly [`/api/lessons/${string}`];
export declare const getGetLessonQueryOptions: <TData = Awaited<ReturnType<typeof getLesson>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLesson>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLesson>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLessonQueryResult = NonNullable<Awaited<ReturnType<typeof getLesson>>>;
export type GetLessonQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get lesson by ID
 */
export declare function useGetLesson<TData = Awaited<ReturnType<typeof getLesson>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLesson>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateLessonUrl: (id: string) => string;
/**
 * @summary Update a lesson
 */
export declare const updateLesson: (id: string, lessonUpdate: LessonUpdate, options?: RequestInit) => Promise<Lesson>;
export declare const getUpdateLessonMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateLesson>>, TError, {
        id: string;
        data: BodyType<LessonUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateLesson>>, TError, {
    id: string;
    data: BodyType<LessonUpdate>;
}, TContext>;
export type UpdateLessonMutationResult = NonNullable<Awaited<ReturnType<typeof updateLesson>>>;
export type UpdateLessonMutationBody = BodyType<LessonUpdate>;
export type UpdateLessonMutationError = ErrorType<unknown>;
/**
* @summary Update a lesson
*/
export declare const useUpdateLesson: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateLesson>>, TError, {
        id: string;
        data: BodyType<LessonUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateLesson>>, TError, {
    id: string;
    data: BodyType<LessonUpdate>;
}, TContext>;
export declare const getDeleteLessonUrl: (id: string) => string;
/**
 * @summary Delete a lesson
 */
export declare const deleteLesson: (id: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteLessonMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteLesson>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteLesson>>, TError, {
    id: string;
}, TContext>;
export type DeleteLessonMutationResult = NonNullable<Awaited<ReturnType<typeof deleteLesson>>>;
export type DeleteLessonMutationError = ErrorType<unknown>;
/**
* @summary Delete a lesson
*/
export declare const useDeleteLesson: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteLesson>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteLesson>>, TError, {
    id: string;
}, TContext>;
export declare const getGetClassesUrl: () => string;
/**
 * @summary List all classes
 */
export declare const getClasses: (options?: RequestInit) => Promise<Class[]>;
export declare const getGetClassesQueryKey: () => readonly ["/api/classes"];
export declare const getGetClassesQueryOptions: <TData = Awaited<ReturnType<typeof getClasses>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getClasses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getClasses>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetClassesQueryResult = NonNullable<Awaited<ReturnType<typeof getClasses>>>;
export type GetClassesQueryError = ErrorType<unknown>;
/**
 * @summary List all classes
 */
export declare function useGetClasses<TData = Awaited<ReturnType<typeof getClasses>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getClasses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map