migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    if (!users.fields.getByName('first_name'))
      users.fields.add(new TextField({ name: 'first_name' }))
    if (!users.fields.getByName('last_name')) users.fields.add(new TextField({ name: 'last_name' }))
    if (!users.fields.getByName('company_name'))
      users.fields.add(new TextField({ name: 'company_name' }))
    if (!users.fields.getByName('cnpj')) users.fields.add(new TextField({ name: 'cnpj' }))
    if (!users.fields.getByName('phone')) users.fields.add(new TextField({ name: 'phone' }))
    if (!users.fields.getByName('role')) users.fields.add(new TextField({ name: 'role' }))
    if (!users.fields.getByName('current_crm'))
      users.fields.add(new TextField({ name: 'current_crm' }))
    if (!users.fields.getByName('sales_team_size'))
      users.fields.add(new TextField({ name: 'sales_team_size' }))
    if (!users.fields.getByName('employee_count'))
      users.fields.add(new TextField({ name: 'employee_count' }))
    if (!users.fields.getByName('monthly_revenue'))
      users.fields.add(new TextField({ name: 'monthly_revenue' }))
    if (!users.fields.getByName('challenges'))
      users.fields.add(new TextField({ name: 'challenges' }))

    app.save(users)
  },
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    users.fields.removeByName('first_name')
    users.fields.removeByName('last_name')
    users.fields.removeByName('company_name')
    users.fields.removeByName('cnpj')
    users.fields.removeByName('phone')
    users.fields.removeByName('role')
    users.fields.removeByName('current_crm')
    users.fields.removeByName('sales_team_size')
    users.fields.removeByName('employee_count')
    users.fields.removeByName('monthly_revenue')
    users.fields.removeByName('challenges')

    app.save(users)
  },
)
