class RoomsController < ApplicationController
  def index
    @rooms = Room.new
    @rooms_list = Room.all
  end
  def show
    @room = Room.find(params[:id])
  end
  def create
    @rooms = Room.new(room_data)
    if @rooms.save
      redirect_to rooms_path
    else
      render json: room_data
    end
  end
  private
  def room_data
    params.require(:room).permit(:name, :description)
  end
end
