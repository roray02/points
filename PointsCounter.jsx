import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus, RotateCcw } from 'lucide-react';

const PointsCounter = () => {
  const [player1Points, setPlayer1Points] = useState(100000);
  const [player2Points, setPlayer2Points] = useState(50);

  const resetScores = () => {
    setPlayer1Points(100000);
    setPlayer2Points(50);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Points Counter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Your Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">You</h2>
            <div className="flex items-center space-x-4">
              <span className="w-10"></span> {/* Spacer for alignment */}
              <span className="text-2xl font-bold w-32 text-center">{player1Points.toLocaleString()}</span>
              <Button 
                variant="outline"
                onClick={() => setPlayer1Points(prev => prev + 1)}
                className="bg-green-50 hover:bg-green-100"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Friend's Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Friend</h2>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => setPlayer2Points(prev => Math.max(0, prev - 1))}
                className="bg-red-50 hover:bg-red-100"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-2xl font-bold w-32 text-center">{player2Points.toLocaleString()}</span>
              <span className="w-10"></span> {/* Spacer for alignment */}
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-4 flex justify-center">
            <Button 
              variant="outline" 
              onClick={resetScores}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset Scores</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsCounter;
