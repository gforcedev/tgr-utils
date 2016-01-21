function animateWindow(path, fw, fh, speed) --frames on width frames on height
    love.graphics.setBackgroundColor(255, 255, 255, 1)

    sprite = love.graphics.newImage(path)
    local width = sprite:getWidth()
    local height = sprite:getHeight()
    local framewidth = width / fw
    local frameheight = width / fh
    quads = {}
    maxQuad = fw * fh
    thisQuad = 1
    for y=1, fh do
        for x=1, fw do
            table.insert(quads, love.graphics.newQuad((x - 1) * framewidth, (y - 1) * frameheight, framewidth, frameheight, width, height))
        end
    end

    love.update = function(dt)
        thisQuad = thisQuad + dt / speed
        if thisQuad > #quads + 1 then
            thisQuad = 1
        end

        love.draw = function()
            love.graphics.draw(sprite, quads[math.floor(thisQuad)], 0, 0)
        end
    end
end
