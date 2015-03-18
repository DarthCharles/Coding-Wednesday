begin
	File.open(ARGV[0]).each_line do |line|
		line = line.gsub(/\n/, "") 	
		normal = line.split(',')[0].split('')
		rotated = line.split(',')[1].split('')
		res = 'False'
		for i in 0..normal.length - 1
			normal.push(normal[0])     
			normal.delete_at(0)
			if normal == rotated
				res = 'True'
				break
			end
		end
		puts res
	end
end