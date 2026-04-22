import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '101db87304a4498dab90e46b0307fe65'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd05ab5aa3921472cace4d990273deb52'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0303d2bb7efd41c5ac54f3e671f12db7'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '03f528d2879d44d99b61f71c059417fb'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0500f8169cbd4d64a429df8c6d09fb45'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '05e9bf93126b4c59b102d72f8e692cf7'
                        key: {
                            name: 'sn_internship_pl_0_student'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ac8400621044cf99ac6551d03efbb47'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f1dc84ddba8482a8dbef4491b739bdc'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'student'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '193b4ffe83db451988dfef28676bda96'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'student_name'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '1a4800e4293741348f1affb4c999fe0b'
                        key: {
                            logical_table_name: 'sn_internship_pl_0_placement'
                            col_name_string: 'student'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1afe8e15830b47989bcdbf80d1846ccf'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1d02c50883f8470592a32d1a62311b92'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'placement_date'
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
                        key: {
                            id: 'b115061d3b021210cf98dda9d41eeba7'
                            field: 'price_if_checked'
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
                        table: 'sys_documentation'
                        id: '3897a84c3ae6498bbd662043b4ca1c1c'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'company'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '3b8411381a3c41a9bfa23a06c2698d92'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'internship'
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
                        table: 'sys_documentation'
                        id: '46c5fe123f674f1c80d4fabc09abf1c7'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48075964515244409144795d91c56050'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '4a15061d3b021210cf98dda9d41eebc3'
                        key: {
                            id: 'ca15061d3b021210cf98dda9d41eebbe'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a3049b3c4aa40fca93e7cb864d769e7'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4be4904911654473b1ad0173aa141ee3'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '520afd586bea4fb5be82591a9afab079'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'company'
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
                        id: '6340a482be2a4ae0861e03bc45fdd306'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'contact_details'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '6a142d3d849a456c93ccd860fdb0d300'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'internship'
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
                        key: {
                            id: 'f115061d3b021210cf98dda9d41eeb6f'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '757f67a9c76b400e95b9529219b805e2'
                        key: {
                            name: 'sn_internship_pl_0_internship'
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
                        key: {
                            id: '3d15061d3b021210cf98dda9d41eeb88'
                            field: 'price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7be15785e57549f989d9cc3bdb24343f'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'NULL'
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
                        table: 'sys_documentation'
                        id: '81464080a57246b784c68a8251969c51'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'student'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '8215061d3b021210cf98dda9d41eebc4'
                        key: {
                            id: 'ca15061d3b021210cf98dda9d41eebbe'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '825632d7d2b74402a3aa8ed568a5a1e5'
                        key: {
                            name: 'sn_internship_pl_0_placement'
                            element: 'placement_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8ac1fdd111fc4bcc96fcfc19955ee8f4'
                        key: {
                            logical_table_name: 'sn_internship_pl_0_placement'
                            col_name_string: 'internship'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fc1750c3a804f9eb501c70f43b2ebca'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'position'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '916d30fe6ba54facbc3be1874cc33a73'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a941878e9f584673aa64f5179c4e063c'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'year'
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
                        table: 'sys_dictionary'
                        id: 'adddb1e284a84d0ca1707ed11a60deb9'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'major'
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
                        table: 'fx_price'
                        id: 'b115061d3b021210cf98dda9d41eeba1'
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
                        key: {
                            id: 'b515061d3b021210cf98dda9d41eeb1c'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b51a2b9be4634c3482d9e2579e6cf853'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'contact_details'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'b915061d3b021210cf98dda9d41eeb74'
                        key: {
                            id: 'f115061d3b021210cf98dda9d41eeb6f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba5ce335c92043448d941b82f32e77f2'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'bd15061d3b021210cf98dda9d41eeb38'
                        key: {
                            id: '3115061d3b021210cf98dda9d41eeb34'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'bd15061d3b021210cf98dda9d41eeb5b'
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
                        id: 'ddf97cb5837b4510a4fa7468b0b357e3'
                        key: {
                            name: 'sn_internship_pl_0_internship'
                            element: 'start_date'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: 'ee217d9abc0944c3a75cfbad5e5ed796'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'student_name'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: 'f10e657de3e4456697bc03372e385b8e'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'year'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: 'f17468dbfdb04df6bb71e1e88477329f'
                        key: {
                            name: 'sn_internship_pl_0_student'
                            element: 'major'
                            language: 'en'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eeb39'
                        key: {
                            id: '3115061d3b021210cf98dda9d41eeb34'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eeb50'
                        key: {
                            id: '7915061d3b021210cf98dda9d41eeb4b'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eeb5c'
                        key: {
                            id: '3115061d3b021210cf98dda9d41eeb57'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f515061d3b021210cf98dda9d41eebb8'
                        key: {
                            id: 'b115061d3b021210cf98dda9d41eeba7'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'f915061d3b021210cf98dda9d41eeba1'
                        key: {
                            id: '3d15061d3b021210cf98dda9d41eeb8f'
                            field: 'price_if_checked'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'fd15061d3b021210cf98dda9d41eeb21'
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
