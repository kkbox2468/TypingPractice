class MessagesController < ApplicationController
  def new
    @message = Message.new
  end
  def create
    if params[:right_input]
      @msg_right = Message.new(msg_params)
      ActionCable.server.broadcast "room_channel_#{@msg_right.room_id}", content: @msg_right.content, type: 'right'
    else
      @msg_left = Message.new(msg_params)
      ActionCable.server.broadcast "room_channel_#{@msg_left.room_id}", content: @msg_left.content, type: 'left'
    end

  end

  private
  def msg_params
    params.require(:message).permit(:content, :room_id)
  end
end
