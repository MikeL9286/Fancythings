class ContactMailer < ActionMailer::Base
  def contact_email(email, message)
  	@email = email
  	@message = message
  	mail(from: @email, to: 'kristin@fancythingsblog.com', subject: 'New Inquiry!').deliver
  end
end
