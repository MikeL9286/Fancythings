class ContactMailer < ActionMailer::Base
  default from: "kristin@fancythingsblog.com"

  def contact_email(email, message)
  	@email = email
  	@message = message
  	mail(from: @email, to: 'kristin@fancythingsblog.com', subject: 'New Message From: me =)').deliver
  end
end
