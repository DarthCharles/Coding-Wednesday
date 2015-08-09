begin
  File.open(ARGV[0]).each_line do |line|
    line = line.gsub(/\n/, "").split('|')
    cont = 0
    venus = []
    res = []
    length = line[0].split(' ').length
    while cont < length
      for i in 0..line.length-1
        a = line[i].split(' ')
        venus.push(a[cont].to_i)
      end
      cont += 1
      res.push(venus.max)
      venus.clear
    end
    puts res.join(' ')
  end
end
