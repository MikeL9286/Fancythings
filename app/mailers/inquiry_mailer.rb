class InquiryMailer < ActionMailer::Base
  def inquiry_email(email, name, website, message)
  	@email = email
  	@name = name
  	@website = website
  	@message = message
  	mail(from: @email, to: 'kristin@fancythingsblog.com', subject: 'New Inquiry - ' + @name).deliver
  end
end
