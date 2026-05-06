import { IntegerColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const sn_internship_pl_0_student = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    label: 'Student',
    name: 'sn_internship_pl_0_student',
    schema: {
        major: StringColumn({
            label: 'Major',
            mandatory: true,
        }),
        year: IntegerColumn({
            label: 'Year',
            mandatory: true,
        }),
        student_name: StringColumn({
            label: 'Student Name',
            mandatory: true,
        }),
        contact_details: StringColumn({
            label: 'Contact Details',
            mandatory: true,
        }),
    },
})
