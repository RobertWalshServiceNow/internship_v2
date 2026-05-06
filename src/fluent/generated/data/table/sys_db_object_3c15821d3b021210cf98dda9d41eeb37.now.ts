export const sn_internship_pl_0_internship = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    label: 'Internship',
    name: 'sn_internship_pl_0_internship',
    schema: {
        start_date: DateColumn({
            label: 'Start Date',
            mandatory: true,
        }),
        position: StringColumn({
            label: 'Position',
            mandatory: true,
        }),
        company: StringColumn({
            label: 'Company',
            mandatory: true,
        }),
        end_date: DateColumn({
            label: 'End Date',
            mandatory: true,
        }),
        status: ChoiceColumn({
            choices: {
                closed: {
                    label: 'Closed',
                },
                open: {
                    label: 'Open',
                },
            },
            dropdown: 'dropdown_with_none',
            label: 'Status',
            mandatory: true,
        }),
    },
})
