import { CatalogItemRecordProducer, DateVariable, MultipleChoiceVariable, SingleLineTextVariable } from '@servicenow/sdk/core'

export const addAnInternshipOpportunity = CatalogItemRecordProducer({
    $id: Now.ID['3d15061d3b021210cf98dda9d41eeb14'],
    name: 'Add an internship opportunity',
    owner: '6816f79cc0a8016401c5a33be04be441',
    shortDescription: 'Create a new internship opportunity',
    version: 8,
    table: 'sn_internship_pl_0_internship',
    variables: {
        company: SingleLineTextVariable({
            question: "What's the name of the company offering the internship?",
            order: 100,
            mapToField: true,
            field: 'company',
            mandatory: true,
        }),
        position: SingleLineTextVariable({
            question: "What's the position for the internship?",
            order: 200,
            mapToField: true,
            field: 'position',
            mandatory: true,
        }),
        start_date: DateVariable({
            question: "What's the start date of the internship?",
            order: 300,
            mapToField: true,
            field: 'start_date',
            mandatory: true,
        }),
        end_date: DateVariable({
            question: "What's the end date of the internship?",
            order: 400,
            mapToField: true,
            field: 'end_date',
            mandatory: true,
        }),
        status: MultipleChoiceVariable({
            question: "What's the current status of the internship?",
            order: 500,
            mapToField: true,
            field: 'status',
            mandatory: true,
            choices: {
                open: {
                    label: 'Open',
                    inactive: false,
                    sequence: 100,
                },
                closed: {
                    label: 'Closed',
                    inactive: false,
                    sequence: 200,
                },
            },
        }),
    },
})
