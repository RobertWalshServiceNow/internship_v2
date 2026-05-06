export const sn_internship_pl_0_placement = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    index: [
        {
            name: 'index',
            unique: false,
            element: 'internship',
        },
        {
            name: 'index2',
            unique: false,
            element: 'student',
        },
    ],
    label: 'Placement',
    name: 'sn_internship_pl_0_placement',
    schema: {
        student: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Student',
            mandatory: true,
            referenceTable: 'sn_internship_pl_0_student',
        }),
        internship: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            label: 'Internship',
            mandatory: true,
            referenceTable: 'sn_internship_pl_0_internship',
        }),
        placement_date: DateColumn({
            label: 'Placement Date',
            mandatory: true,
        }),
    },
})
