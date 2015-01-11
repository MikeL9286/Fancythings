class ContactMailer < ActionMailer::Base
  def contact_email(email, name, message)
  	@email = email
  	@name = name
  	@message = message
  	mail(from: @email, to: 'kristin@fancythingsblog.com', subject: 'New Inquiry - ' + @name).deliver
  end
end
