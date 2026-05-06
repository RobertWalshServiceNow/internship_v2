import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '3515c21d3b021210cf98dda9d41eebfc': {
                        table: 'sys_security_acl'
                        id: '3515c21d3b021210cf98dda9d41eebfc'
                    }
                    '3d15061d3b021210cf98dda9d41eeb14': {
                        table: 'sc_cat_item_producer'
                        id: '3d15061d3b021210cf98dda9d41eeb14'
                    }
                    '3d15061d3b021210cf98dda9d41eeb88': {
                        table: 'sc_cat_item_producer'
                        id: '3d15061d3b021210cf98dda9d41eeb88'
                    }
                    '6115c21d3b021210cf98dda9d41eeba3': {
                        table: 'sys_security_acl'
                        id: '6115c21d3b021210cf98dda9d41eeba3'
                    }
                    '6115c21d3b021210cf98dda9d41eebad': {
                        table: 'sys_security_acl'
                        id: '6115c21d3b021210cf98dda9d41eebad'
                    }
                    '6d15c21d3b021210cf98dda9d41eeb39': {
                        table: 'sys_security_acl'
                        id: '6d15c21d3b021210cf98dda9d41eeb39'
                    }
                    '7515c21d3b021210cf98dda9d41eebf6': {
                        table: 'sys_embedded_help_role'
                        id: '7515c21d3b021210cf98dda9d41eebf6'
                    }
                    a515c21d3b021210cf98dda9d41eeb2f: {
                        table: 'sys_security_acl'
                        id: 'a515c21d3b021210cf98dda9d41eeb2f'
                    }
                    a915c21d3b021210cf98dda9d41eeb82: {
                        table: 'sys_security_acl'
                        id: 'a915c21d3b021210cf98dda9d41eeb82'
                    }
                    a915c21d3b021210cf98dda9d41eeb8c: {
                        table: 'sys_security_acl'
                        id: 'a915c21d3b021210cf98dda9d41eeb8c'
                    }
                    ad15c21d3b021210cf98dda9d41eeb43: {
                        table: 'sys_security_acl'
                        id: 'ad15c21d3b021210cf98dda9d41eeb43'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'd85cc69f179d44d48e2984462625d3cb'
                    }
                    e115c21d3b021210cf98dda9d41eeb5a: {
                        table: 'sys_security_acl'
                        id: 'e115c21d3b021210cf98dda9d41eeb5a'
                    }
                    e115c21d3b021210cf98dda9d41eeb64: {
                        table: 'sys_security_acl'
                        id: 'e115c21d3b021210cf98dda9d41eeb64'
                    }
                    e115c21d3b021210cf98dda9d41eeb6e: {
                        table: 'sys_security_acl'
                        id: 'e115c21d3b021210cf98dda9d41eeb6e'
                    }
                    e115c21d3b021210cf98dda9d41eeb78: {
                        table: 'sys_security_acl'
                        id: 'e115c21d3b021210cf98dda9d41eeb78'
                    }
                    e515c21d3b021210cf98dda9d41eeb29: {
                        table: 'sys_embedded_help_role'
                        id: 'e515c21d3b021210cf98dda9d41eeb29'
                    }
                    ec15421d3b021210cf98dda9d41eebc8: {
                        table: 'sys_app_info'
                        id: 'ec15421d3b021210cf98dda9d41eebc8'
                    }
                    ed15c21d3b021210cf98dda9d41eeb4d: {
                        table: 'sys_security_acl'
                        id: 'ed15c21d3b021210cf98dda9d41eeb4d'
                    }
                    'internship-date-validation': {
                        table: 'sys_script_client'
                        id: '810ac32f696d49f88ced8010c23f0de8'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0e6f4f2210cd409d8c6b57dc59d29126'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '04d220c7299244e6bc9f7569bb5f0dc6'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1914d0d8584341508a4157abec9f6418'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2098f681bbd1478e8ddc7ed27deeae80'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'student_name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2606720b17984f72adf17450720e7a7f'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26c80c80185745a48f97fdb252311ec7'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2915c21d3b021210cf98dda9d41eeb32'
                        key: {
                            sys_security_acl: 'a515c21d3b021210cf98dda9d41eeb2f'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2915c21d3b021210cf98dda9d41eeb85'
                        key: {
                            sys_security_acl: 'a915c21d3b021210cf98dda9d41eeb82'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c517dac727b44298dc98f4bdafd264f'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2d15c21d3b021210cf98dda9d41eeb3c'
                        key: {
                            sys_security_acl: '6d15c21d3b021210cf98dda9d41eeb39'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3115061d3b021210cf98dda9d41eeb34'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb14'
                            variable_set: 'NULL'
                            name: 'position'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '3115061d3b021210cf98dda9d41eeb51'
                        deleted: true
                        key: {
                            id: '7915061d3b021210cf98dda9d41eeb4b'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3115061d3b021210cf98dda9d41eeb57'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb14'
                            variable_set: 'NULL'
                            name: 'end_date'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '3115061d3b021210cf98dda9d41eebb9'
                        deleted: true
                        key: {
                            id: 'b115061d3b021210cf98dda9d41eeba7'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3181810e6b794ebc85e15c28e4c97bfc'
                        key: {
                            name: 'sn_internship_pl_0_student'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '344628c42b0c4fe9af1a2ae38b42355f'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'major'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '3515c21d3b021210cf98dda9d41eebf5'
                        key: {
                            name: 'sn_internship_pl_0.student'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39114421d10f4099a91e663c5983abed'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3915061d3b021210cf98dda9d41eeb7a'
                        key: {
                            question: 'f115061d3b021210cf98dda9d41eeb6f'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c15821d3b021210cf98dda9d41eeb3c'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3d15061d3b021210cf98dda9d41eeb8f'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb88'
                            variable_set: 'NULL'
                            name: 'student'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '4a15061d3b021210cf98dda9d41eebc3'
                        deleted: true
                        key: {
                            id: 'ca15061d3b021210cf98dda9d41eebbe'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d2df618aed948adbcea4437e208c29b'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'internship'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '54abfc1b0be847209de23c9a3b23cb7c'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d9c501ad03a47b7b21b17633bf4e6c3'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'student_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e98b66707b3480593b53852ab289a95'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'student'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6115c21d3b021210cf98dda9d41eeb5d'
                        key: {
                            sys_security_acl: 'e115c21d3b021210cf98dda9d41eeb5a'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6115c21d3b021210cf98dda9d41eeb67'
                        key: {
                            sys_security_acl: 'e115c21d3b021210cf98dda9d41eeb64'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6115c21d3b021210cf98dda9d41eeb71'
                        key: {
                            sys_security_acl: 'e115c21d3b021210cf98dda9d41eeb6e'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6115c21d3b021210cf98dda9d41eeb7b'
                        key: {
                            sys_security_acl: 'e115c21d3b021210cf98dda9d41eeb78'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6815421d3b021210cf98dda9d41eebd2'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6d15c21d3b021210cf98dda9d41eeb46'
                        key: {
                            sys_security_acl: 'ad15c21d3b021210cf98dda9d41eeb43'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7115061d3b021210cf98dda9d41eeb74'
                        deleted: true
                        key: {
                            id: 'f115061d3b021210cf98dda9d41eeb6f'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '71b86397085f4f43b6d9ce6542ab8e51'
                        key: {
                            logical_table_name: 'sn_internship_pl_0_placement'
                            col_name_string: 'student'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '77f06e1001c74016b2e99f86d7fb5fbf'
                        key: {
                            logical_table_name: 'sn_internship_pl_0_placement'
                            col_name_string: 'internship'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '77f5c9e69f10031049033781990a1ccb'
                        key: {
                            name: 'sn_internship_pl_0_student'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7915061d3b021210cf98dda9d41eeb0b'
                        key: {
                            sys_security_acl: '3515c21d3b021210cf98dda9d41eebfc'
                            sys_user_role: {
                                id: '3515c21d3b021210cf98dda9d41eebf5'
                                key: {
                                    name: 'sn_internship_pl_0.student'
                                }
                            }
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7915061d3b021210cf98dda9d41eeb15'
                        deleted: true
                        key: {
                            id: '3d15061d3b021210cf98dda9d41eeb14'
                            field: 'price'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7915061d3b021210cf98dda9d41eeb4b'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb14'
                            variable_set: 'NULL'
                            name: 'start_date'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '7915061d3b021210cf98dda9d41eeb89'
                        deleted: true
                        key: {
                            id: '3d15061d3b021210cf98dda9d41eeb88'
                            field: 'price'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7984f8a077e648c0bfc4917b24103df8'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7d15061d3b021210cf98dda9d41eeb7e'
                        key: {
                            question: 'f115061d3b021210cf98dda9d41eeb6f'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d4f2322ac7a4bb6928e05ef5eee5d74'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d67ae0b5bdd44e2bd25bd7d8b847104'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'placement_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8162c65e420f4fd7afee16b05014a336'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '8215061d3b021210cf98dda9d41eebc4'
                        deleted: true
                        key: {
                            id: 'ca15061d3b021210cf98dda9d41eebbe'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b4f7190521e477d9953d204a794e862'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f017aa91a914248ae93d1ce809a6bdc'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'internship'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '939b350222284588b08e95421cdcb4cd'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'major'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97e9ca70e7f14fbbb12e3aa03dc303e5'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'placement_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ac7d2c9144a40a89c3c2682273af682'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'contact_details'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                        key: {
                            name: 'sn_internship_pl_0.internship_coordinator'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad15c21d3b021210cf98dda9d41eeb50'
                        key: {
                            sys_security_acl: 'ed15c21d3b021210cf98dda9d41eeb4d'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'aff5c9e69f10031049033781990a1c8e'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b06be3f1c0264fd0b77af0d87e85a59e'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'company'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'b115061d3b021210cf98dda9d41eeba1'
                        deleted: true
                        key: {
                            id: '3d15061d3b021210cf98dda9d41eeb8f'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b115061d3b021210cf98dda9d41eeba7'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb88'
                            variable_set: 'NULL'
                            name: 'internship'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2d1fa8db7ce4a9f9890545eb84c5534'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b515061d3b021210cf98dda9d41eeb1c'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb14'
                            variable_set: 'NULL'
                            name: 'company'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'b515061d3b021210cf98dda9d41eeb21'
                        deleted: true
                        key: {
                            id: 'b515061d3b021210cf98dda9d41eeb1c'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'b915061d3b021210cf98dda9d41eeb74'
                        deleted: true
                        key: {
                            id: 'f115061d3b021210cf98dda9d41eeb6f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'bd15061d3b021210cf98dda9d41eeb38'
                        deleted: true
                        key: {
                            id: '3115061d3b021210cf98dda9d41eeb34'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'bd15061d3b021210cf98dda9d41eeb5b'
                        deleted: true
                        key: {
                            id: '3115061d3b021210cf98dda9d41eeb57'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ca15061d3b021210cf98dda9d41eebbe'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb88'
                            variable_set: 'NULL'
                            name: 'placement_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ce16a3c7f2b64c6193bfd2cfa7e9713c'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf2afee369bc4f67b4da3705eea36ff5'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'student'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd115821d3b021210cf98dda9d41eeba9'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd515821d3b021210cf98dda9d41eebac'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd515821d3b021210cf98dda9d41eebc0'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9e806d450e045749425abc40dff3fd0'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da42689f0c30401fae69e1e31480f136'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'contact_details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ded59226826f4127a760b23099eab6f4'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'position'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e67c2daa39ce43a7b910378c7c1da391'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'company'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ed15c21d3b021210cf98dda9d41eeb9b'
                        key: {
                            sys_security_acl: 'a915c21d3b021210cf98dda9d41eeb8c'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ed15c21d3b021210cf98dda9d41eeba5'
                        key: {
                            sys_security_acl: '6115c21d3b021210cf98dda9d41eeba3'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed26975371ac4808af7d310c345a2cee'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'year'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'eff5c9e69f10031049033781990a1c58'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f115061d3b021210cf98dda9d41eeb6f'
                        key: {
                            cat_item: '3d15061d3b021210cf98dda9d41eeb14'
                            variable_set: 'NULL'
                            name: 'status'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eeb39'
                        deleted: true
                        key: {
                            id: '3115061d3b021210cf98dda9d41eeb34'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eeb50'
                        deleted: true
                        key: {
                            id: '7915061d3b021210cf98dda9d41eeb4b'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eeb5c'
                        deleted: true
                        key: {
                            id: '3115061d3b021210cf98dda9d41eeb57'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eebb8'
                        deleted: true
                        key: {
                            id: 'b115061d3b021210cf98dda9d41eeba7'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f915061d3b021210cf98dda9d41eeba1'
                        deleted: true
                        key: {
                            id: '3d15061d3b021210cf98dda9d41eeb8f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'fd15061d3b021210cf98dda9d41eeb21'
                        deleted: true
                        key: {
                            id: 'b515061d3b021210cf98dda9d41eeb1c'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fd15c21d3b021210cf98dda9d41eebaf'
                        key: {
                            sys_security_acl: '6115c21d3b021210cf98dda9d41eebad'
                            sys_user_role: {
                                id: 'ad15c21d3b021210cf98dda9d41eeb1b'
                                key: {
                                    name: 'sn_internship_pl_0.internship_coordinator'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
