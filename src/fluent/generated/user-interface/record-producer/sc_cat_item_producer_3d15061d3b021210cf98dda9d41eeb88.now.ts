export const addNewStudentPlacement = CatalogItemRecordProducer({
    $id: Now.ID['3d15061d3b021210cf98dda9d41eeb88'],
    name: 'Add New Student Placement',
    owner: '6816f79cc0a8016401c5a33be04be441',
    shortDescription: 'Create a new student placement',
    version: 4,
    table: 'sn_internship_pl_0_placement',
    variables: {
        student: ReferenceVariable({
            question: 'Select Student',
            order: 100,
            mapToField: true,
            field: 'student',
            mandatory: true,
            referenceTable: 'sn_internship_pl_0_student',
        }),
        internship: ReferenceVariable({
            question: 'Select Internship',
            order: 200,
            mapToField: true,
            field: 'internship',
            mandatory: true,
            referenceTable: 'sn_internship_pl_0_internship',
        }),
        placement_date: DateVariable({
            question: 'Placement Date',
            order: 300,
            mapToField: true,
            field: 'placement_date',
            mandatory: true,
        }),
    },
})
