class Retrieve
require 'csv'
CSV.foreach("contacts.csv") do |row|
First Name=row[0]
Middle Name=row[1]
Last Name=row[2]
E-mail Address=row[14]
puts "#{row[0] #{row[1]} #{row[2]} #{row[14]}"
end
end
